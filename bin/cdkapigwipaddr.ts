#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkapigwipaddrStack } from '../lib/cdkapigwipaddr-stack';

const app = new cdk.App();
new CdkapigwipaddrStack(app, 'CdkapigwipaddrStack');
