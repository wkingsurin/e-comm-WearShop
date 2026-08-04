import { useState } from "react";

type AddButtonState = "idle" | "pending" | "success" | "error";

export function useAddToCartButton() {
    const [state, setState] = useState<AddButtonState>("idle");

    return {
        state,

        start() {
            setState("pending");
        },
        success() {
            setState("success");
        },
        fail() {
            setState("error");
        },
        reset() {
            setState("idle");
        },
    };
}
