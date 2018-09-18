import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => {
return <div className={classes.BuildControl}>
{/* label is a dynamic component because we'll have a couple of them, unlike less and more which will be the same for each ingredient */}
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less}>less</button>
    <button className={classes.More}>more</button>
</div>
};

export default buildControl;