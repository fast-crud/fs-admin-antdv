import { request } from "../service";
/**
 * @description: Login interface parameters
 */
export interface LoginReq {
  username: string;
  password: string;
}

export interface UserInfoRes {
  userId: string | number;
  username: string;
  nickName: string;
}

export interface LoginRes {
  userId: string | number;
  token: string;
}

export async function login(data: LoginReq): Promise<LoginRes> {
  return await request({
    url: "/login",
    method: "post",
    data
  });
}

export async function mine(): Promise<UserInfoRes> {
  return await request({
    url: "/sys/authority/user/mine",
    method: "post"
  });
}
