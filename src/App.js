import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/Newscards/NewsCards";
import useStyles from "./styles";

function App() {
  const [newsArticles, setArticles] = useState([]);
  const classes = useStyles();
  const alanKey =
    "551da58065820a777b9016c56ef7ed9e2e956eca572e1d8b807a3e2338fdd0dc/stage";
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setArticles(articles);
        }
      },
    });
  }, []);
  return (
    <>
      <div>
        <div className={classes.logoContainer}>
          <img
            src="https://alan.app/voice/images/previews/preview.jpg"
            className={classes.alanLogo}
            alt="alan-logo"
          />
        </div>
        <NewsCards articles={newsArticles} />
      </div>
    </>
  );
}

export default App;
