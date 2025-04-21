const home = (req, res) => {
  res.status(200).json({mge: 'Home'})
}

module.exports = { home }