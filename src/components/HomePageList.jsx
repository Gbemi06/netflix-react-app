import { useEffect, useState } from "react";
import { Col, Spinner } from "react-bootstrap";
import SingleArtist from "./SingleArtist";

const HomePageList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (query = "eminem") => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          { query }
      );
      if (response.ok) {
        let result = await response.json();
        console.log(result.data[0].duration);
        let results = result.data;
        console.log(results);
        setData(results);
        setIsLoading(false);
        console.log(data);
      } else alert("something went wrong");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {data === undefined
        ? isLoading && <Spinner animation="border" variant="success" />
        : data.map((result, i) => (
            <Col xs={6} md={3} lg={2} key={i}>
              <SingleArtist result={result} />
            </Col>
          ))}
    </>
  );
};

export default HomePageList;
