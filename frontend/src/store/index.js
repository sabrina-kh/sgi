import { configureStore } from '@reduxjs/toolkit'

//import reducers 
import AuthReducer from "../store/reducers/auth.reducer"
import UserReducer from "../store/reducers/user.reducer"
import ArticleReducer from "../store/reducers/article.reducer"
import CommandeReducer from "../store/reducers/commande.reducer"

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    User: UserReducer,
    Article: ArticleReducer,
    Commande: CommandeReducer
  },
})