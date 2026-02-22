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
    },

    Mutation: {
        addMovie: async (__, args) => {
            const movie = new MovieModel(args);
            return await movie.save();
        }, 

        updateMovie: async (__, args) => {
            const { id, ...updateData } = args;
            return await MovieModel.findByIdAndUpdate(id, updateData, { new: true });
        },

        deleteMovie: async (__, args) => {
            return await MovieModel.findByIdAndDelete(args.id);
        }
    }
};

export default movieResolvers;