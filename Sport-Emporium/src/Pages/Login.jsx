import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  useColorModeValue,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Spinner,
  Stack,
  Text,
  background,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { login } from "../redux/AuthReducer/action";
//import { LOGIN_S } from "../redux/AuthReducer/actionType";
import Navbar from "../components/Navbar/Navbar";
import { ViewIcon } from "@chakra-ui/icons";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const loading = useSelector((store) => store.AuthReducer.isLoading);
  const pathRoute = location.state?.from?.pathname || "/";
  const [eye, setEye] = useState(false);
  const handleEye = () => {
    setEye((prev) => !prev);
  };
  const loginHandler = () => {
    if (email === "user123@gmail.com" && password === "user@123") {
      const params = {
        email,
        password,
      };
      dispatch(login(params, toast)).then(() => {
        navigate("/admin", { replace: true });
      });
    } else if (email && password) {
      const params = {
        email,
        password,
      };
      dispatch(login(params, toast)).then((res) => {
        if (res.payload.msg === "login successfully") {
          toast({
            title: "Login Success",
            description: "You are successfully logged in",
            status: "success",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
          navigate(pathRoute, { replace: true });
        } else {
          toast({
            title: res.payload.msg,
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        }
      });
    }
  };

  return (
    <>
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} >
          <Stack align={"center"} >
            <Heading fontSize={"4xl"} textTransform={"uppercase"}>
              Login
            </Heading>
          </Stack>
          <Box rounded={"lg"} boxShadow={"lg"} p={8} bg={useColorModeValue("white", "gray.700")}
>
            <Stack spacing={8}>
              <FormControl id="username" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={eye ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement h={"full"}>
                    <Button variant={"ghost"} onClick={handleEye}>
                      <ViewIcon />
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"black"}
                  color={"whitesmoke"}
                  _hover={{
                    bg: "none",
                    color: "black",
                    border: "1px solid black",
                  }}
                  onClick={loginHandler}
                >
                  {loading ? <Spinner /> : "Sign in"}
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Don't have an account?
                  <RouterLink to="/register" color={"blue.400"}>
                    Signup
                  </RouterLink>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};

export default Login;

