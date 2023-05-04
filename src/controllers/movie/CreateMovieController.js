const CreateMovieUseCase = require("../../models/movie/useCase/createMovie/CreateMovieUseCase");

class CreateMovieController {
  async handle(req, res) {
    try {
      const { originalname: nameImg, filename: thumbnail, size } = req.file;
      const { title, description, streamer, cast } = req.body;
      const { userId } = req.params;

      const createMovieUseCase = new CreateMovieUseCase();

      const result = await createMovieUseCase.execute(
        userId,
        nameImg,
        size,
        title,
        description,
        thumbnail,
        streamer,
        cast
      );
      res.status(201).send(result);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CreateMovieController;
