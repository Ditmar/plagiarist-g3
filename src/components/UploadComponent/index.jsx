import ItemUpload from "./ItemUpload";
import useStyles from "./upload.styles";

const UploadComponent = () => {
    const classes = useStyles();
    return <div className={classes.content}>
            <h4 className={classes.H4}>Suba el documento pdf de trabajo que desea revisar, el sitema verifica similidad de los documentos contonidos en la base de datos, ya depende del tutor tomar decisiones sobre dicho trabajo</h4>
          <ItemUpload />
    </div>
}
export default UploadComponent;