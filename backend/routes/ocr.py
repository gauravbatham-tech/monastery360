from fastapi import APIRouter, UploadFile, File
from utils.ocr_helper import extract_text
import tempfile

router = APIRouter()

@router.post("/")
async def ocr_image(file: UploadFile = File(...)):
    with tempfile.NamedTemporaryFile(delete=False) as tmp:
        tmp.write(await file.read())
        text = extract_text(tmp.name)
    return {"text": text}
