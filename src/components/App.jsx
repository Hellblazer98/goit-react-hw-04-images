import React, { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from "./GlobalStyled";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Layout } from "./Layout";
import { Searchbar } from "./Searchbar/Searchbar";

export const App = () => {
  const [imageSearch, setImageSearch] = useState('');


	const onFormSubmit = (search) => {
    setImageSearch(search);
	}


    return (
      <Layout>
        <GlobalStyles />
        <ToastContainer />
        <Searchbar onSubmit={onFormSubmit} />
        <ImageGallery value={imageSearch}/>
      </Layout>
  )
}
