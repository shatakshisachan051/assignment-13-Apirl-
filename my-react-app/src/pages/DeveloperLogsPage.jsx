import {useParams} from "react-router-dom"
import { UseSelector, useSelector } from "react-redux"
import {
    Box,
    Button,
    Input,
    VStack,
    Table,
    Tbody,
    Thead,
    Tr,
    Th,
    Td,
    HStack,
    Select,
  } from "@chakra-ui/react";

  function DeveloperLogsPage(){
    let {devId} = useParams()
    let logs = useSelector((state)=> state.logs.originalLogs)
    let userLogs = logs.filter((log)=> log.devId === devId)

    return (
        <Box p={6}>
                    <Table variant="simple">
            <Thead>
                <Tr>
                    <Th>ID</Th>
                    <Th>Timestamp</Th>
                    <Th>Severity</Th>
                    <Th>Message</Th>
                    <Th>Dev ID</Th>
                </Tr>
            </Thead>
            <Tbody>
                {userLogs.map((log)=>(
                    <Tr key={log.id}>
                        <Td>{log.id}</Td>
                        <Td>{log.timestamp}</Td>
                        <Td>{log.severity}</Td>
                        <Td>{log.message}</Td>
                        <Td>{log.devId}</Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>

        </Box>
    )
  }

  export default DeveloperLogsPage