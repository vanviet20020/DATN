const Cinema = require('../../models/Cinema');

const validateQuery = (args) => {
    const { page, limit } = args;

    const vLimit = limit > 0 ? parseInt(limit, 10) : 20;

    const vPage = page > 1 ? parseInt(page, 10) : 1;

    const skip = (vPage - 1) * vLimit;

    const pagination = [
        { $sort: { updated_at: -1 } },
        { $skip: skip },
        { $limit: vLimit },
    ];

    const name = args.name ? [{ $match: { name: { $regex: args.name } } }] : [];

    const disctrict = args.disctrict
        ? [{ $match: { disctrict: args.disctrict } }]
        : [];

    const filterNameSupplier = args.name_supplier
        ? [{ $eq: ['$name', args.name_supplier] }]
        : [];

    const aggregate = [
        ...name,
        ...disctrict,
        {
            $lookup: {
                from: 'suppliers',
                let: { id_supplier: '$supplier' },
                pipeline: [
                    {
                        $match: {
                            $expr: {
                                $and: [
                                    { $eq: ['$$id_supplier', '$_id'] },
                                    ...filterNameSupplier,
                                ],
                            },
                        },
                    },
                ],
                as: 'supplier',
            },
        },
        { $match: { supplier: { $gt: ['$size', 0] } } },
    ];

    return { aggregate, pagination };
};

module.exports = async (args) => {
    const { aggregate, pagination } = validateQuery(args);

    const total = await Cinema.aggregate([
        ...aggregate,
        { $count: 'number' },
    ]).then((res) => (res[0] ? res[0].number : 0));

    const cinemas = await Cinema.aggregate([...aggregate, ...pagination]);

    return { total, cinemas };
};
