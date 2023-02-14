exports.sendSuccess = (req, res) => result => {
    return res.send({
        success: res.success !== undefined ? res.success : true,
        data: result
    })
}

exports.sendError = (req, res) => error => {
    console.error('ERROR', error)

    const message = typeof error === 'string' ? error : error.message || ''
    const code = error.code || false

    const result = {
        success: false,
        message
    }

    if (code) {
        result.code = code
    }

    res.send(result)
}