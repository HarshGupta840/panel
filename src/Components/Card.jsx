import React from 'react'

export default function Card() {
  return (
    <div>Card</div>
  )
}

// import React from 'react'
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { styled } from '@mui/material/styles';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function Card() {
//     const [expanded, setExpanded] = React.useState(false);

//     const handleExpandClick = () => {
//       setExpanded(!expanded);
//     };
//   return (
//     <>
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActions disableSpacing>
//       <h2>hello</h2>        
//       <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
          
//         </CardContent>
//       </Collapse>
//     </Card>
//     </>
//   )
// }