import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import type { Channel as StreamChannel } from "stream-chat";
import {
    useCreateChatClient
} from "stream-chat-react"

// 16:07 of Part 2