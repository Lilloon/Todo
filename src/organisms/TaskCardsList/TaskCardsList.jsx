import React from "react";
import style from "./TaskCardsList.module.css";
import TaskCard from "../../molecules/TaskCard/TaskCard";
import Text from "../../atoms/Text/Text";
import { connect } from "react-redux";

class TaskCardsList extends React.Component {
  render() {
    this.taskList = this.props.todos;
    return (
      <div className={style.cardsList}>
        {this.taskList?.length !== 0 && this.taskList ? (
          <div>
            {this.taskList.map((card) => (
              <TaskCard card={card} key={card.id} />
            ))}{" "}
          </div>
        ) : (
          <div className={style.text}>
            <Text text="Tasks list are empty :(" />
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todos: state.tasksReducer?.taskList,
  };
};

export default connect(mapStateToProps)(TaskCardsList);
