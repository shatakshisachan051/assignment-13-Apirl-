import { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Button, Input, VStack } from "@chakra-ui/react";
import {setLogs} from "../features/logs/logsSlice"

function UploadPage() {
  let [json, setJson] = useState("");
  let dispatch = useDispatch();

  function handleUpload() {
        let parsed = JSON.parse(json)
        dispatch(setLogs(parsed))

        alert('Upload Successfull!')

  }

  return (
    <Box p={6}>
      <VStack spacing={4}>
        <Input
          placeholder="Wrtie your json here"
          value={json}
          onChange={(e) => setJson(e.target.value)}
        />

        <Button colorScheme="teal" onClick={handleUpload}>
          Upload Logs
        </Button>
      </VStack>
    </Box>
  );
}


export default UploadPage
