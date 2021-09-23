import * as React from 'react';
import { getSessionCookie } from 'common/cookies';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';


const user = getSessionCookie();

const trainerComponents = [
  'ManageRoutinesComponent',
  'displayClientInfoComponent',
  'ClientsContainerComponent',
  'ClientsListContainerComponent',
  'ExerciseListComponent',
  'ExerciseFormComponent',
  'ExerciseCardComponent',
];
const clientComponents = ['displayClientInfoComponent'];
/*
const getTrainer = (username: string, trainerId: number) => {
  const trainer = trainerAPI.find((t) => t.trainer_info.email === username);
  if (trainer) {
    return trainer.trainer_id === trainerId;
  } else {
    return false;
  }
};
export const hasPermision = (componentName: string): boolean => {
  const { trainerId } = useParams();
  switch (user.loginInfo.rol) {
    case 'trainer':
      return (
        trainerComponents.includes(componentName) &&
        getTrainer(user.loginInfo.username, +trainerId)
      );
      break;
    case 'client':
      return clientComponents.includes(componentName);
      break;
    default:
      return false;
      break;
  }
};
*/
export const AccessDeniedComponent: React.FC<{}> = () => (
  <Typography component='p' style={{ color: 'red' }}>
    Access denied.
  </Typography>
);
