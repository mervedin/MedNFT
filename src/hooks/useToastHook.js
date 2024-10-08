import { useToast, Link } from "@chakra-ui/react";

export default function useToastHook() {
  const toast = useToast();

  function displayToast(transactionSignature) {
    toast({
      title: "NFT Minted!",
      description: (
        <Link
          href={`https://explorer.solana.com/tx/${transactionSignature}?cluster=devnet`}
          isExternal
        >
          View on Solana Explorer
        </Link>
      ),
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  }

  return displayToast;
}
