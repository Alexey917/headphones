import { redirect } from "react-router-dom"

export const formDataAction = async ({ request }: { request: Request })  => {
  const formData = await request.formData();
  const data = {
    name: formData.get('name'),
    phone: formData.get('phone'),
  }

  sessionStorage.setItem(`user_${data.name}${data.phone}`, JSON.stringify(data))
  return redirect('/success')
}