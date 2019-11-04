export default (error, context) => {
  console.log(error)
  context.error({
    statusCode: 304,
    message: 'Server error'
  })
}
