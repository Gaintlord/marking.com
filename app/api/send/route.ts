import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend("re_TkwRatjz_HTd2dP1DdLQiz3xhB7baXXKj");

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "gaintlord69<609@gmail.com>",
      to: ["delivered@resend.dev"],
      subject: "welcome to testify.com",
      react: EmailTemplate({ firstName: "John" }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
