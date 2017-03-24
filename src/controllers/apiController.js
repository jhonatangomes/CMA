import articleModel from '../models/articleModel'

export default class apiController {

  static articles_list_get (req, res, next) {
    articleModel.find({}, (err, articles) => {
      if (err) { return next(err) }
      res.json(articles)
    })
  }

  static article_create_post (req, res, next) {
    const article = new articleModel({
      title: req.body.title,
      content: req.body.content
    })

    article.save((err) => {
      if (err) { return next(err) }
      console.log('Saved!')
      res.send(article)
    })
  }

  static article_get (req, res, next) {
    articleModel.find({ _id: req.params.id }, (err, article) => {
      if (err) { return next(err) }
      res.json(article)
    })
  }
}


// export { articles_list_get, article_create_post, article_get }