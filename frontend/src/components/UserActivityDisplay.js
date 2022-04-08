import { Paper } from '@material-ui/core';
import ActivityList from './ActivityList';
function UserActivityDisplay(props) {
  const { ClickselectedDay } = props;
  //console.log(ClickselectedDay, 'dgaq');
  return (
    <Paper className="paper">
      <h3>
        Activities on {ClickselectedDay.day}-{ClickselectedDay.month}{' '}
      </h3>
      <ActivityList
      // loading={loading}
      // activities={activities}
      // authUser={props.authUser}
      // setOpenSnackbar={setOpenSnackbar}
      // setSnackbarMsg={setSnackbarMsg}
      // editActivity={editActivity}
      // setEditing={setEditing}
      />
    </Paper>
  );
}

export default UserActivityDisplay;
