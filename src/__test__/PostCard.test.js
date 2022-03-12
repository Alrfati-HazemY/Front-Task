import { render, screen , fireEvent , waitFor} from "@testing-library/react"
import "@testing-library/jest-dom"
import React from 'react'
import { BrowserRouter} from "react-router-dom"
import PostCard from "../views/Posts/PostCard"

describe("Post Card Component" , () => {

    let post = {
        id : "1",
        title : "Post one",
        body : "it is the first post",
        
    }

    test("render the component" , () => {
        render(<BrowserRouter><PostCard post={post} /> </BrowserRouter> )
        const ShowBtn = screen.getByText("Show All comments")
    })
} )