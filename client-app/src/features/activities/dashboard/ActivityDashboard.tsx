import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "../ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id : string) => void;
    cancelSelectActivity: () => void;
    editMode : boolean;
    openForm : (id : string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void
    submetting: boolean;
}

export default function ActivityDashboard({activities, selectActivity, deleteActivity,
    selectedActivity, cancelSelectActivity, editMode, openForm, closeForm, createOrEdit, submetting} : props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList 
                activities={activities} 
                selectActivity={selectActivity}
                deleteActivity={deleteActivity}
                submetting={submetting}
                /> 
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                <ActivityDetails 
                activity={selectedActivity} 
                cancelSelectActivity={cancelSelectActivity}
                openForm={openForm}
                />}
                {editMode &&
                <ActivityForm 
                closeForm={closeForm} 
                activity={selectedActivity} 
                createOrEdit={createOrEdit}
                submetting={submetting}
                />}
            </Grid.Column>
        </Grid>
    )
}