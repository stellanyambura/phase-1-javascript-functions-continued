function saturdayFun(activity = 'roller-skate'){
    return "This Saturday, I want to "+activity+"!"
}
function mondayWork(activityy = 'go to the office'){
    return 'This Monday, I will '+activityy+"."
}
function wrapAdjective(adjective){
    function special(receive){
        // return `You are ${adjective}${receive}${adjective}!`

        // same as 
        
        return `You are `+ adjective + receive + adjective+"!"
    }
    return special
 }
 wrapAdjective('*')
