import React, { SyntheticEvent } from "react";
import { Button, Item, ItemDescription, Segment, Label } from "semantic-ui-react";
import { Activity } from "../../app/models/activity";

interface Props {
    activities : Activity[];
    selectActivity : (id : string) => void;
    deleteActivity : (id : string) => void
    submetting: boolean;
}

export default function ActivityList({activities, selectActivity, deleteActivity, submetting}: Props) {
   const[target, setTarget] = React.useState('');

   function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
       setTarget(e.currentTarget.name);
       deleteActivity(id);
   }
    return(
        <Segment>
            <Item.Group divided>
                {activities.map(activity => (
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as='a'>{activity.title}</Item.Header>
                            <Item.Meta>{activity.date}</Item.Meta>
                            <ItemDescription>
                                <div>{activity.description}</div>
                                <div>{activity.city}</div>
                            </ItemDescription>
                            <Item.Extra>
                                <Button onClick={() => selectActivity(activity.id)} floated='right' content='view' color='blue'/>
                                <Button 
                                name={activity.id} 
                                loading={submetting && target === activity.id} 
                                onClick={(e) => handleActivityDelete(e, activity.id)} 
                                floated='right' 
                                content='Delete' 
                                color='red'/>
                                <Label basic content={activity.category}/>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}