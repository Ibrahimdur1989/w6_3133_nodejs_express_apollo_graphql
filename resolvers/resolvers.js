import MovieModel from '../models/movie.js';

// Resolvers define the technique for fetching the types defined in the schema.
const movieResolvers = {
    Query: {
        movies: async () => {
            return await MovieModel.find();
        },

        movie: async (__, args) => {
            return await MovieModel.findById(args.id);
        },

        moviesByDirector: async (__dirname, args) => {
            return await MovieModel.findByDirector(args.director_name)
        }
    }
};

export default movieResolvers;