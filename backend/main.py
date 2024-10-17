# main.py

from fastapi import FastAPI, Request
from pydantic import BaseModel
from typing import List, Dict, Any
from collections import defaultdict
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Dict
import networkx as nx

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



# Define Node and Edge models
class Node(BaseModel):
    id: str
    data: Dict[str, str] = Field(..., example={"nodeType": "customInput", "inputName": "input_1", "inputType": "Text"})

class Edge(BaseModel):
    source: str
    target: str

class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]

# Utility function to check if the graph is a DAG
def is_dag(nodes: List[Node], edges: List[Edge]) -> bool:
    G = nx.DiGraph()

    # Add nodes to the graph
    for node in nodes:
        G.add_node(node.id)

    # Add edges to the graph
    for edge in edges:
        G.add_edge(edge.source, edge.target)

    # Check if the graph is a DAG
    return nx.is_directed_acyclic_graph(G)

# Endpoint to parse and validate the pipeline
@app.post("/pipelines/parse")
async def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    # Check if it's a valid DAG
    if not is_dag(pipeline.nodes, pipeline.edges):
        return {
            "num_nodes": num_nodes,
            "num_edges": num_edges,
            "is_dag": False
        }

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": True
    }

# Basic route for health check
@app.get("/")
async def read_root():
    return {"message": "Pipeline backend is running!"}
