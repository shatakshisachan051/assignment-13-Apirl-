import { useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { filterReducer, initialFilterState } from "../reducers/filterReducer";
import { filterLogs } from "../features/logs/logsSlice";

function LogsPage() {
  let [state, dispatchLocal] = useReducer(filterReducer, initialFilterState);
  let logs = useSelector((state) => state.logs.originalLogs);
  let filteredLogs = useSelector((state) => state.logs.activeLogs);
  let dispatchRedux = useDispatch();

  function applyFilter() {
    let result = logs.filter((log) => {
      return (
        (!state.severity || log.severity === state.severity) &&
        (!state.devId || log.devId === state.devId) &&
        log.timestamp >= state.timeRange.from &&
        log.timestamp <= state.timeRange.to
      );
    });

    dispatchRedux(filterLogs(result));
  }

  return (
    <Box p={6}>
      <VStack spacing={4}>
        <HStack spacing={4} wrap="wrap">
          <Select
            placeholder="Severity"
            onChange={(e) =>
              dispatchLocal({ type: "SET_SEVERITY", payload: e.target.value })
            }
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="critical"> Critical</option>
          </Select>
          <Input placeholder="Developer ID" onChange={(e) =>
              dispatchLocal({ type: "SET_DEVID", payload: e.target.value })
            }/>
            <Input type="number" placeholder="from timestamp" onChange={(e) =>
              dispatchLocal({ type: "SET_TIMERANGE", payload: {from: state.timeRange.from , to:Number(e.target.value)} })
            }/>
            <Button onClick={applyFilter} colorScheme="teal">Aplply Filter</Button>
        </HStack>

        <Table variant="striped">
            <Thead>
                <Tr>
                    <Th>IID</Th>
                    <Th>Timestamp</Th>
                    <Th>Severity</Th>
                    <Th>Message</Th>
                    <Th>Dev ID</Th>
                </Tr>
            </Thead>
            <Tbody>
                {filteredLogs.map((log)=>(
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
      </VStack>
    </Box>
  );
}

export default LogsPage
