const prisma = require("../../../../db");
const AppError = require("../../../../erros/AppErro");

class CreateMovieUseCase {
  async execute(
    userId,
    nameImg,
    size,
    title,
    description,
    thumbnail,
    streamer,
    cast
  ) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (user.role !== "ADM") {
      throw new AppError("Without Permission");
    }

    const movie = await prisma.movie.create({
      data: {
        cast,
        nameImg,
        size,
        streamer,
        thumbnail,
        title,
        description,
      },
    });

    return movie;
  }
}

module.exports = CreateMovieUseCase;
