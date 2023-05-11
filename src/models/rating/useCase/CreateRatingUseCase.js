const prisma = require("../../../db");
const AppError = require("../../../erros/AppErro");

class CreateRatingUseCase {
  async execute(userId, movieName, type) {
    const validCategories = ["assistido", "assistir", "gostei", "nao-gostei"];

    if (!validCategories.includes(type)) {
      throw new AppError("Invalid Category");
    }

    const movie = await prisma.movie.findUnique({
      where: {
        name: movieName,
      },
    });

    if (!movie) {
      throw new AppError("Movie is not found", 404);
    }

    const existingRating = await prisma.rating.findFirst({
      where: {
        userId: { equals: userId },
        movieId: { equals: movie.id },
      },
    });

    if (existingRating) {
      const updatedRating = await prisma.rating.update({
        where: { id: existingRating.id },
        data: {
          type: existingRating.type + "," + type,
        },
      });
      return res.json(updatedRating);
    } else {
      const newRating = await prisma.rating.create({
        data: {
          type,
          userId,
          movieId: movie.id,
        },
      });
      return newRating;
    }
  }
}

module.exports = CreateRatingUseCase;
