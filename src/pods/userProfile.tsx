import * as React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

export const UserProfileComponent: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading... </div>; // TODO: incluir spinner
  }

  return (
    isAuthenticated && (
      <>
        <h1>User Profile</h1>
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia component='img' alt={user.name} image={user.picture} />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {user.name}
            </Typography>
            <Typography variant='body2'>{user.email}</Typography>
          </CardContent>
        </Card>
      </>
    )
  );
};
