import useStyles from "./itemUpload.styles";
import useUpload from "../../../hooks/useUpload";
import { Delete, PictureAsPdf } from "@mui/icons-material";


const ItemUpload = ({onCancel, name, type, size, onUpload}) => {
    const classes = useStyles();
    const upload =  useUpload(1)
    function handleClick(){
        alert(upload.file.name)
    }

    function handleClickDelete(){
        upload.onCancelUpload()
    }

    function CardInfo(){
        return(
            <div className={classes.cardInfo}>                    
                <PictureAsPdf style={{ color: 'orange' , width: "50px", height:"50px" }} /> <br/> {upload.file.name} <br/> {upload.file.size} MB
                <button className={classes.buttonDelete} onClick={handleClickDelete}>
                    <Delete className={classes.deleteIcom}/>
                </button>
            </div>
        )
    }

    return(
        <div className={classes.main}>
            <div className={classes.container}>
                <input draggable onDrop={upload.checkUpload} onChange={upload.onChangeFile}  type="file" accept="application/pdf" className={classes.input}></input>
                
                {upload.formatAccepted? <CardInfo/> : ""}
            </div>
            <div className={classes.inputButton}>
                Subir PDF
                <input type="file" accept="application/pdf" onChange={upload.onChangeFile} className={classes.input}/>
            </div>
            <button onClick={handleClick} className={classes.button}>Enviar</button>
        </div>
    )        
}
export default ItemUpload;
