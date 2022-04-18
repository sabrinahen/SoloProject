const CommentController = require("../controllers/comment.controller");


module.exports = (app) => {

    app.get("/api/comments", CommentController.findAllComments);
    app.post("/api/comments", CommentController.createNewComment);
    app.put("/api/comments/:id", CommentController.likeComment);

}