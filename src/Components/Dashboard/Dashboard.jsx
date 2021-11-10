import "./dashboard.css";
import { List } from "./List";
import { LastDayColumn } from "./LastDayColumn";
import { TimeColumn } from "./TimeColumn";
import { ListItem } from "./ListItem";
import { DaysColumn } from "./DaysColumn";

export const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <List>
        <ListItem>
          <TimeColumn />
        </ListItem>
        <ListItem>
          <DaysColumn />
        </ListItem>
        <ListItem>
          <DaysColumn />
        </ListItem>
        <ListItem>
          <DaysColumn />
        </ListItem>
        <ListItem>
          <DaysColumn />
        </ListItem>
        <ListItem>
          <DaysColumn />
        </ListItem>
        <ListItem>
          <DaysColumn />
        </ListItem>
        <ListItem>
          <LastDayColumn />
        </ListItem>
      </List>
    </div>
  );
};
