import React from 'react'
import { Button, Input } from "@chakra-ui/react";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { Field } from "../../../components/ui/field";
import { PasswordInput } from "../../../components/ui/password-input";

const DoctorSignUpModalButton = () => {

    return (
      <DialogRoot minH='1000px'>
        <DialogTrigger>
          <Button margin="0.5rem" fontSize={{ base: '0.75rem', md: '0.75rem', lg: '0.9rem' }}>
            Create Doctor Account
          </Button>
        </DialogTrigger>
        <DialogContent marginLeft='0.5rem' marginRight='0.5rem'>
          <DialogHeader>
            <DialogTitle>Create doctor account</DialogTitle>
          </DialogHeader>
          <DialogCloseTrigger />
          <DialogBody pb={6}>
            <Field label="Email">
              <Input placeholder="Enter your email" />
            </Field>
            <Field label="User ID" required mt={4}>
              <Input placeholder='Input ID' />
            </Field>
            <Field label="Password" required mt={4}>
              <PasswordInput placeholder='Input password' />
            </Field>
            <Field label="Name" required mt={4}>
              <Input placeholder='Input your name' />
            </Field>
            <Field label="Phone Number" required mt={4}>
              <Input placeholder='Input phone number' />
            </Field>
            <Field label="Hospital Address" required mt={4}>
              <Input placeholder='Input hospital address' />
            </Field>
          </DialogBody>

          <DialogFooter>
            <Button>Make Account</Button>
            <DialogActionTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogActionTrigger>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    );
}

export default DoctorSignUpModalButton