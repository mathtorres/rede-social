import{posts,suggestUsers} from './database.js'
import { eventPosts } from './newPost.js'
import { render, renderModal, renderSuggests } from './render.js'


render(posts)
renderSuggests(suggestUsers)
renderModal(posts)
eventPosts(posts)
