"use client";

import { TrashBin } from "@gravity-ui/icons";
import {AlertDialog, Button} from "@heroui/react";
import { RiDeleteBin5Line } from "react-icons/ri";

export function BookingCancelAlert({bookingId}) {
        const handleCancel = async () => {
        const res = await fetch(`http://localhost:5000/booking/${bookingId}`,{
            method: 'DELETE',
            headers: {
                "content-type": "application/json"
            }
          })
        const data = await res.json();
        window.location.reload();
    }
  return (
    <AlertDialog>
      <Button className={" rounded-none border-red-500 text-red-500 gap-5"} variant='outline'><TrashBin />Cancel</Button>
       
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleCancel} slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}