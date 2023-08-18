//combing types of intersection using '&' instead of '|';
//has to be number and string at same times : ex number & string


type Draggable = {
    drag: () => void

}

type Resizable = {
    resize: () => void
}

//combinging them into one type

type UIWidge = Draggable & Resizable
let textBox: UIWidge = {
    drag: () => {},
    resize: () => {}
}

//allows you to use methods from both alias type