"use client";
import { useRouter } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";
import { HomeOutlined } from "@mui/icons-material";

export default function NotFound() {
    const router = useRouter();

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
                color: "#fff",
                textAlign: "center",
                padding: "20px",
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    fontSize: { xs: "80px", md: "150px" },
                    fontWeight: 700,
                    background: "linear-gradient(90deg, #4230c4, #6366f1)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: "20px",
                }}
            >
                404
            </Typography>

            <Typography
                variant="h4"
                sx={{
                    fontSize: { xs: "24px", md: "36px" },
                    fontWeight: 500,
                    marginBottom: "16px",
                }}
            >
                Project Not Found
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    fontSize: { xs: "16px", md: "18px" },
                    color: "rgba(255, 255, 255, 0.7)",
                    maxWidth: "500px",
                    marginBottom: "40px",
                }}
            >
                The project you are looking for does not exist or may have been moved.
            </Typography>

            <Button
                variant="contained"
                startIcon={<HomeOutlined />}
                onClick={() => router.push("/")}
                sx={{
                    backgroundColor: "#4230c4",
                    padding: "12px 32px",
                    fontSize: "16px",
                    borderRadius: "30px",
                    textTransform: "none",
                    "&:hover": {
                        backgroundColor: "#5a4fcf",
                    },
                }}
            >
                Back to Home
            </Button>
        </Box>
    );
}