import React, { useState, useEffect, ChangeEvent } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import TutorialDataService from "../services/ApiService";
import ITutorialData from "../types/Tutorial";
import Button from '@mui/material/Button';

const Tutorial: React.FC = () => {
  const { id }= useParams();
  let navigate = useNavigate();
  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [currentTutorial, setCurrentTutorial] = useState<ITutorialData>(initialTutorialState);
  const [message, setMessage] = useState<string>("");
  const getTutorial = (id: string) => {
    TutorialDataService.get(id)
      .then((response: any) => {
        setCurrentTutorial(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  useEffect(() => {
    if (id)
      getTutorial(id);
  }, [id]);
  const handleInputChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };
  const updatePublished = (status: boolean) => {
    var data = {
      id: currentTutorial.id,
      title: currentTutorial.title,
      description: currentTutorial.description,
      published: status
    };
    TutorialDataService.update(currentTutorial.id, data)
      .then((response: any) => {
        console.log(response.data);
        setCurrentTutorial({ ...currentTutorial, published: status });
        setMessage("The status was updated successfully!");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  const updateTutorial = () => {
    TutorialDataService.update(currentTutorial.id, currentTutorial)
      .then((response: any) => {
        console.log(response.data);
        setMessage("The tutorial was updated successfully!");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  const deleteTutorial = () => {
    TutorialDataService.remove(currentTutorial.id)
      .then((response: any) => {
        console.log(response.data);
        navigate("/tutorials");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  return ( 
  <div>
    <Button variant="contained">Hello World</Button>
  </div>
);
};
export default Tutorial;
