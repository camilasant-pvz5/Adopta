import Badge from 'react-bootstrap/Badge';

function Tags(props) {
  return (
    <Badge className='badge' bg={props.color}>{props.text}</Badge>
  );
}

export default Tags;