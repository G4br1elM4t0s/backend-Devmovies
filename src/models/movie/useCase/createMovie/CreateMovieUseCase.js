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
    category,
    cast
  ) {
    const validCategories = ["assistido", "assistir", "gostei", "nao-gostei"];

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (user.role !== "ADM") {
      throw new AppError("Without Permission");
    }

    if (!validCategories.includes(category)) {
      throw new AppError("Invalid category");
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
