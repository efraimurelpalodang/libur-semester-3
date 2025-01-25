function saklar(status) {

    console.log(status);
    const lampu1 = document.getElementById('lampu1');

    status == 'on' ? lampu1.src = 'asets/images/on.gif' : lampu1.src = 'asets/images/off.gif';
    return lampu1;

}