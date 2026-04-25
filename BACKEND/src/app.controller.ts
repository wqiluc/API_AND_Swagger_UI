import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController
{
  @Get()
  getHello(): string
  {
    return "Olá, mundo!";
  }

  @Get("health")
  getHealth(): object
  {
    return {
      status: "Fine✅",
      timestamp: new Date().toISOString(),
    };
  }
}