import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: { // Title of the article
        type: String,
        required: true,
    },
    summary: { // AI generated summary of the article
        type: String,
        required: true,
    },
    content: { // content of the article
        type: String,
        required: true,
    },
    link: { // link ot the article
        type:String,
        required: true,
    },
    vectorembedding: { // vector embedding of the article (for semantic search) ... should this be for the whole article or just the summary?
        // lets do for the summary first
        type: Array,
        required: true
    },
    date: { // date the article was added to the database
        type: Date,
        default: Date.now,
        required: true,
    },
});

const Article = mongoose.model('Article', articleSchema);

export default Article;