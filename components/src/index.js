import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning!</h4>
        Are you sure you want to do this?
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 6:00AM"
          avatar={faker.image.avatar()}
          comment="Hello World!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          avatar={faker.image.avatar()}
          comment="Hello World!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 1:00PM"
          avatar={faker.image.avatar()}
          comment="Hello World!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));